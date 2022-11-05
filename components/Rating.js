import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { toast } from "react-toastify";
import axios from "axios";

//import useSWR from 'swr'

const Rate = ({product}) => {

	
/*
	const address = `http://localhost:3000/api/orders/history`;
	const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  	const { data,  error } = useSWR(address, fetcher);
	*/

	const [orders, setOrders] = useState([])
	const [rate, setRate] = useState(4);
	const [opinion, setOpinion] = useState("")
	const { data : session } = useSession();
	const userId = session?.user._id;

	const userName = session?.user.name
	



	const newReview = {
		userName: userName,
		rate: rate,
		comment: opinion
	}

	
	let tutu =	orders.map(x => x.orderItems).flat()
	let zz = tutu.find(x => x.productId == product._id)
	let alreadyComment = product.rating.find(e => e.userId == userId)
	
	
		/**not next friendly, use swr */
	useEffect(() => {
		if(userId){
			const getOrders = async () => {
				try{
					const res = await axios.get(`http://localhost:3000/api/orders/history`)
					setOrders(res.data)
				}catch(err) {
					console.log(err)
				}
			}
			getOrders()
		}
		else console.log("not connect")
		}, [userId])

	

	


	const handleOpinion = () => {
		console.log(userId)

		if(!userId ) {
			toast.info("must be connected")
		}
	
		else if(!zz){
			toast.info("must have bought product")
		}
		else if(alreadyComment){
			toast.info("already comment")
		}
		
		else{
			try{
				let newProduct =	product
				newProduct.rating.push(newReview)
				axios.put(`/api/products/${product._id}`, newProduct)
				toast.success("registerd thx")
			}
			catch(err) {
				console.log(err)
			}
		}
	}



return (
    <div>

	<div className="flex">
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label key={index}>
			<input 
			type="radio"
            className="hidden"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
			}}
			/>
			<div >
            {
                givenRating < rate || givenRating === rate
                ? <div className="stars"><Image src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1667037619/shoes/Pngtree_star_vector_icon_4015244_j8mmoa.png"} alt="star" width={80} height={80} /></div>
                :  <div className="stars"><Image src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1667037619/shoes/Pngtree_vector_star_icon_4186970_ozpjfu.png"} alt="star" width={80} height={80} /></div>
            }
			
			</div>
		</label>
		);
	})}
	</div>

    <input type="text" placeholder="your opinion counts" onChange={(e) => setOpinion(e.target.value)}/>
    <button onClick={() => handleOpinion()}>click me</button>
    </div>
);
};

export default Rate;
