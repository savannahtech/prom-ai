import { StationIcon, StorageIcon, WorkshopIcon } from './assets/svg';
export type TaskID = string;
export type ColumnID = string;

export type TaskType = "menu" | "announcement";
export interface TaskData {
    id: string;
    content: string;
    type: TaskType;
}

export interface ColumnnData {
    id: string;
    title: string;
    taskIds: TaskID[];
}
export interface ColumnDataMap {
    [key: string]: ColumnnData;
}

export interface ApplicationData {
    columns: ColumnDataMap;
}

export const getTask = (id: string): TaskData => {
    const type = id.split("/")[1];
    return {
        id: id,
        content:
            type === "announcement"
                ? "Take out the garbage"
                : "Watch my favorite show",
        type: type as TaskType
    };
};

export const cloneTask = (id: string): TaskData => {
    const [partial, type] = id.split("/");
    const newPartial = (parseInt(partial) + 1).toString();
    return getTask([newPartial, type].join("/"));
};

export const initialData: ApplicationData = {
    columns: {
        "left": {
            id: "left",
            title: "Uncategorized",
            taskIds: []
        },
        "right": {
            id: "right",
            title: "Stations",
            taskIds: ["1/announcement"]
        },
    }
};
