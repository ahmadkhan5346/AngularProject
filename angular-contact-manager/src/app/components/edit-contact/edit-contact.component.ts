import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'app-edit-contact',
    templateUrl: './edit-contact.component.html',
    styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
    public loading: boolean = false;
    public contactId: string | null = null;
    public contact: IContact = {} as IContact;
    public errorMessage: string | null = null;
    public groups: IGroup[] = [] as IGroup[];

    constructor(private activateRoute: ActivatedRoute, private contactService: ContactService, private router: Router){
    }

    ngOnInit(): void{
        this.loading = true;
        this.activateRoute.paramMap.subscribe((param) => {
            this.contactId = param.get('contactId');
        });

        if (this.contactId){
            this.contactService.getContact(this.contactId).subscribe((data) => {
                this.contact = data;
                this.loading = false;
                this.contactService.getAllGroups().subscribe((data) => {
                    this.groups = data
                })
            }, (error) => {
                this.errorMessage = error;
                this.loading = false;
            });
        }
    }

    public submitUpdate(){
        if (this.contactId){
            this.contactService.updateContact(this.contact, this.contactId).subscribe((data) => {
            this.router.navigate(['/']).then();
        }, (error) => {
            this.errorMessage = error;
            this.router.navigate([`/contacts/edit/${this.contactId}`]).then();
        });
        }
    }
}
