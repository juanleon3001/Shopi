import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;

	return (
		<div className="flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-4">
			<p className="flex justify-between w-full">
				<div className="flex flex-col">
					<span>01.02.23</span>
					<span className="font-light">{totalProducts} articles</span>
				</div>
				<div className="flex items-center gap-2">
					<span className="font-medium text-2xl">${totalPrice}</span>
					<ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"></ChevronRightIcon>
				</div>
			</p>
		</div>
	);
};

export default OrdersCard;
