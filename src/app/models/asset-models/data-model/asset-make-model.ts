export interface IAssetMakeModel {
    makeId: string;
    makeModel: string;
    makeName: string;
    modelId: string;
    modelName: string;
}

export class AssetMakeModel implements IAssetMakeModel {

    makeId = '';
    makeModel = '';
    makeName = '';
    modelId = '';
    modelName = '';
}
