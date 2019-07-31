import { APIHandler } from "./apiHandler";
import RequestRequest from "../Entities/RequestRequest";
import RequestEntity from "../Entities/RequestEntity";
import RequestToCompleteEntity from '../Entities/ToComplete/RequestToCompleteEntity';
import NumberResponse from "../Entities/ToComplete/NumberResponse";

export interface IRequestHandler {
    createRequest(entity: RequestRequest) : Promise<RequestEntity>;
    getRequestByRequestId(id: number) : Promise<RequestToCompleteEntity>;
    finalizeRequestByRequestId(id: number) : Promise<NumberResponse>;
}

export class RequestHandler implements IRequestHandler {
    
    async createRequest(entity: RequestRequest) : Promise<RequestEntity> {
        return await APIHandler(`/api/Request/AddRequest`, {
            headers: {"Content-Type" : "application/json"},
            method: "POST",
            data: entity,
            responseType: RequestEntity
        });
    }

    async getRequestByRequestId(id: number) : Promise<RequestToCompleteEntity> {
        return await APIHandler(`api/Request/GetSimplifiedRequestById/${id}`,{
            headers: {"Content-Type" : "application/json"},
            method:'GET',
            responseType:RequestToCompleteEntity
        });
    }

    async finalizeRequestByRequestId(id: number) : Promise<NumberResponse> {
        return await APIHandler(`api/Request/FinalizeRequest/${id}`,{
            headers: {"Content-Type" : "application/json"},
            method:'PUT',
            responseType:NumberResponse
        });
    }
}