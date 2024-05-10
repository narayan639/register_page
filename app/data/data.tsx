import { z } from 'zod';

export const Form_req = [
    {
        "title": "Name",
        "name": "name",
        "placeholder":"Eg: Karan lama",
        "required": true
    },
    {
        "title": "Email",
        "name": "email",
        "placeholder":"Eg: Karanlama@gmail.com",
        "required": true
    },
    {
        "title": "Phone",
        "name": "phone",
        "placeholder":"Eg: 9999999999",
        "required": true
    },
    {
        "title": "password",
        "name": "password",
        "required": true
    },
    {
        "title": "confirm_password",
        "name": "confirm_password",
        "required": true
    },
    {
        "title": "Address",
        "placeholder":"Eg: Kathmandu",
        "name": "address",
        "required": true
    },
    {
        "title": "Referal code",
        "placeholder":"Eg: 4553GHH",
        "name": "refcode",
        "required": true
    }
]


 const Obj = {
    name: z.string().min(3, "Institution Name must be at least 3 characters"),
    address: z.string().min(3, "Address must be at least 3 characters"),
    email: z.string().email('Invalid email address').min(3, 'Email must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    refcode: z.string().min(3, "Referal code is required"),
    phone: z.string().refine((val) => String(val).length === 10, 'Phone number must be 10 digits long'),
    confirm_password: z.string().trim(),
}

export const SignUpSchema = z.object(Obj) .refine(
    ({ confirm_password, password }) => {
      return confirm_password === password
    },
    {
      message: 'Confirm password must match new password.',
      path: ['confirm_password'],
    },
  );

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
