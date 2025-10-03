import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../redux/cart-slice";
import toast from "react-hot-toast";
import { getDataLike } from "../../redux/like-slice";

const Card = (props) => {
  const dispatch = useDispatch();
  const { thumbnail, title, price, id } = props;
  const { like } = useSelector((state) => state.likeSlice);

  const isLiked = like.find((value) => value.id === id);

  return (
    <div className="shadow p-3">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />

        {isLiked ? (
          <FaHeart
            onClick={() => {
              dispatch(getDataLike(props));
              toast.success("Saralanganlardan o'chirildi");
            }}
            className="absolute top-2 right-2 cursor-pointer text-red-500"
          />
        ) : (
          <FaRegHeart
            onClick={() => {
              dispatch(getDataLike(props));
              toast.success("Saralangalarga qo'shildi");
            }}
            className="absolute top-2 right-2 cursor-pointer text-gray-700"
          />
        )}
      </div>

      <div className="h-[100px] flex flex-col justify-between mt-2">
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <h2 className="text-sm text-gray-600">{price} $</h2>
        </div>

        <Button
          onClick={() => {
            dispatch(getData(props));
            toast.success("Product cartga qo'shildi");
          }}
          className="w-full mt-2"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;

