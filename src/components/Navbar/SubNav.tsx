import { Fragment } from "react";
import { Button, EntityOverview, Line, List, Text } from ".."

export const SubNav = () => {
    const entities = [
        {
            title: "Number of floors",
            src: "images/img_trash.svg",
            value: 1
        },
        {
            title: "Number of lines",
            src: "images/img_line.svg",
            value: 0
        },
        {
            title: "Number of stations",
            src: "images/img_station.svg",
            value: 0
        },
        {
            title: "Tools in stations",
            src: "images/img_trash.svg",
            value: 0
        }
    ]

    return (
        <div className="px-5 py-3 relative w-full border-b border-bd-color">
            <div className="w-full flex flex-col md:flex-row items-center">
                <div className="w-1/4">
                    <Text
                        className="md:ml-[0] ml-[23px] mr-[248px] text-3xl sm:text-[26px] md:text-[30px] text-gray-900 tracking-[0.40px]"
                        size="txtLatoMedium30"
                    >
                        Medtronic
                    </Text>
                </div>

                <div className="w-3/4 flex items-center justify-between">
                    <List
                        className="w-full md:w-[55%] flex items-center justify-between"
                        orientation="horizontal"
                    >
                        {entities?.map((el, index) => (
                            <Fragment key={index}>
                                <EntityOverview title={el.title} src={el.src} value={el.value} />
                                {entities.length - 1 !== index && (
                                    <Line className="self-center h-11 bg-gray-300 w-px" />
                                )}
                            </Fragment>
                        ))}
                    </List>

                    <div className="flex items-center gap-5">
                        <Button
                            className="cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[52px] md:ml-[0] ml-[553px] md:mt-0 mt-[9px] text-center text-sm tracking-[0.46px] uppercase"
                            shape="round"
                            color="indigo_800"
                            variant="fill"
                        >
                            save
                        </Button>
                        <Button
                            className="border border-indigo-800 border-solid cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[73px] ml-4 md:ml-[0] md:mt-0 mt-[9px] text-center text-sm tracking-[0.46px] uppercase"
                            shape="round"
                            color="white_A700"
                            variant="fill"
                        >
                            export
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
