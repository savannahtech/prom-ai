import { Button } from '..';
import PlannerAddNewStationDargdrop from '../PlannerAddNewStationDargdrop';

const DrageAread = () => {
	return (
		<div className="bg-white-A700 flex flex-col gap-8 items-start justify-start">
			<Button
				className="bg-transparent cursor-pointer font-medium leading-[normal] min-w-[83px] text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-900 tracking-[0.40px]"
				size="xs"
			>
				Line 1
			</Button>

			<PlannerAddNewStationDargdrop className="bg-white-A700 flex flex-col items-center justify-center mb-[531px] rounded shadow-bs w-[210px] border border-blue_gray-100" />
		</div>
	);
};

export default DrageAread;
