export const TopNav = () => {
	return (
		<header>
			<div className="bg-white-A700 border-b border-indigo-600 border-solid flex flex-col items-center justify-center px-5 w-full">
				<div className="flex flex-col md:flex-row md:gap-10 items-center justify-between mb-3.5 mt-[17px] w-full">
					<div className="flex flex-col items-end justify-start">
						<div className="flex flex-row items-center justify-between">
							<img className="h-[33px] object-cover" src="images/img_asset142x1.png" alt="asset142xOne" />

							<div className="border-b-2 border-primary ml-24">
								<img className="h-8 w-8 mb-1" src="images/img_home.svg" alt="home" />
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center justify-end w-full md:w-auto">
						<div className="flex flex-row gap-8 items-center justify-start">
							<div className="flex flex-row gap-2 items-center justify-start w-auto">
								<img className="h-8 w-8" src="images/img_avatar.svg" alt="avatar" />
								<div className="flex flex-col gap-0.5 items-start justify-start w-auto">
									<span
										className="text-gray-900 text-xs tracking-[0.40px] w-auto"
										// size="txtLatoBold12"
									>
										Yossef Pilatis
									</span>
									<span
										className="text-gray-700 text-xs tracking-[0.40px] w-auto"
										// size="txtLatoRegular12"
									>
										Senior Planner
									</span>
								</div>
							</div>
							<div className="flex flex-row gap-4 items-start justify-start w-auto">
								<span
									className="text-center text-gray-700 text-sm tracking-[0.40px] w-auto"
									// size="txtLatoRegular14"
								>
									13:45
								</span>
								<span
									className="text-center text-gray-700 text-sm tracking-[0.40px] w-auto"
									// size="txtLatoRegular14"
								>
									18.07.23
								</span>
							</div>
							<img className="h-[52px] w-[52px]" src="images/img_logosgen.svg" alt="logosgen" />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
