import { StepUxConfig } from "@lumen/client-angular";

export interface CATALOGPRODUCTINTERFACE extends StepUxConfig {
    title: string;
    submitLabel: string;
    cancelLabel: string;
    cmsUrl: string;
    selectedNode: string;
    fields: FIELD[];


}

export interface FIELD {
    getObject: string;
    GetProperties: GETPROPERTY[]
}

export interface GETPROPERTY {
    getProperty: string;
}
