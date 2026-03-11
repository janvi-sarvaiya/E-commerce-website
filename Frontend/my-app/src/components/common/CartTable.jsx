import { Empty } from "antd";
import { IoCloseSharp } from "react-icons/io5";
import { deleteCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

export default function CartTable({ cartItem, tempQuantity, setTempQuantity }) {
  const dispatch = useDispatch();
  const handleChangeQuantity = (product_id, productSize) => (e) => {
    setTempQuantity({
      ...tempQuantity,
      [`${product_id}-${productSize}`]: +e.target.value,
    });
  };
  return (
    <div>
      <div className="grid grid-cols-4 items-center p-5 px-10 shadow-md inset-shadow-sm">
        <p>Product</p>
        <p className="text-right">Price</p>
        <p className="text-right">Quantity</p>
        <p className="text-right">Subtotal</p>
      </div>
      <div className="space-y-8 mt-8">
        {cartItem.length == 0 ? (
          <Empty
            className="flex flex-col items-center bg-[#F5F5F5] p-2"
            description="Your Cart is Empty!"
            image="https://res.cloudinary.com/dxj264ncs/image/upload/v1772445350/emptycart_zb42tu.png"
          />
        ) : (
          cartItem?.map(
            ({ product_id, name, price, quantity, image, productSize }) => (
              <div
                key={`${product_id}-${productSize}`}
                className="grid grid-cols-4 items-center p-4 px-10 shadow-md inset-shadow-sm hover:bg-[#F5F5F5] relative"
              >
                <p className="flex items-center gap-5">
                  <img src={image[0]?.url} alt={name} className="w-14 h-12" />
                  {name}
                </p>
                <p className="text-right">${price}</p>
                <input
                  type="number"
                  min={1}
                  onKeyDown={(e) => {
                    if ([".", "-", "+"].includes(e.key)) e.preventDefault();
                  }}
                  value={
                    tempQuantity[`${product_id}-${productSize}`] ?? quantity
                  }
                  onChange={handleChangeQuantity(product_id, productSize)}
                  className="max-w-16 border p-2 px-3 rounded border-gray-400 place-self-end-safe"
                />
                <p className="text-right">${price * quantity}</p>
                <button
                  onClick={() =>
                    dispatch(deleteCart({ product_id, productSize }))
                  }
                  className="absolute -right-2.5 -top-2 bg-orange text-white rounded-full p-1 cursor-pointer"
                >
                  <IoCloseSharp size={25} />
                </button>
              </div>
            ),
          )
        )}
      </div>
    </div>
  );
}
