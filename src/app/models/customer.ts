export class Customer {
    id :number=0;
    createAt? :Date;
    lastUpdated? :Date;
    firstName :string='';
    lastName :string='';
    email:string='';

    public constructor(init?: Partial<Customer>) {
        Object.assign(this, init);
    }
}
