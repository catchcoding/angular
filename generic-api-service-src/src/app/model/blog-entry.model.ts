export class BlogEntry
{
    private _id: number;
    private _heading: string;
    private _preview: string;

    public get id(): number
    {
        return this._id;
    }

    public set id(value: number)
    {
        this._id = value;
    }

    public get heading(): string
    {
        return this._heading;
    }

    public set heading(value: string)
    {
        this._heading = value;
    }

    public get preview(): string
    {
        return this._preview;
    }

    public set preview(value: string)
    {
        this._preview = value;
    }
}
