export class ServiceResponseContents {
    text: string;
    translated: string;
    translation: string;
}
export class ServiceResponse {
    contents: ServiceResponseContents;
    success: {
        total: number;
    };
}