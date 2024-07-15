export interface SvgDefinition {
    typeName: string;
    variableName: string;
    interfaceName: string;
    data: string;
    prefix: string;
    filenameWithoutEnding: string;
}
export declare const filesProcessor: (conversionOptions: any) => Promise<SvgDefinition[]>;
