export class Customer {
    id? :number| undefined;
    createAt? :Date| undefined;
    lastUpdated? :Date| undefined;
    firstName :string| undefined;
    lastName :string| undefined;
    email:string| undefined;

    public constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
    }
}
