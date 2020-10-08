export interface Contact {
    id: number;
    name: string;
    jobTitle: string;
    company: string;
    phone: string;
    address: string;
    email: string;
    lastDateContacted: Date;
    comments?: string;
}
