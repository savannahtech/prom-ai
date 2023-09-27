import React from "react";
import { Text } from "..";

type PlannerAddNewStationDargdropProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "dragtext"
> &
  Partial<{ dragtext: string }>;

const PlannerAddNewStationDargdrop: React.FC<
  PlannerAddNewStationDargdropProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-auto md:h-[210px] w-[210px] items-center justify-center rounded"
          style={{ backgroundImage: "url('images/img_frame592.svg')" }}
        >
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-center text-gray-700 text-sm tracking-[0.46px] w-auto"
              size="txtLatoRegular14"
            >
              {props?.dragtext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

PlannerAddNewStationDargdrop.defaultProps = { dragtext: "Drag Station" };

export default PlannerAddNewStationDargdrop;
