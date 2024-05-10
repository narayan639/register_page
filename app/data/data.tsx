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

export const TYPES = ["High school", "IB School", "University", "Language School", "HE Institution / collage"] as const
export const COUNTRY = ["Japan", "China", "India", "United Kingdom", "USA"] as const
export const FUND = ["Private", "Public"] as const
export const TIMEZONE = ["Uk time zone", "USA time zone", "India time zone"] as const

export const Obj = {
    Institution_Name: z.string().min(3, "Institution Name must be at least 3 characters"),
    type: z.enum(TYPES),
    address: z.string().min(3, "Address must be at least 3 characters"),
    city: z.string().min(2, "City name must be at least 2 characters"),
    state: z.string().min(2, "State name must be at least 2 characters"),
    country: z.enum(COUNTRY),
    zipcode: z.string().min(3, "Zip / Postal Cose must be at least 3 characters"),
    timezone: z.enum(TIMEZONE),
    estyear: z.string().min(4, "Establish Year must be at least 4 digits"),
    fund: z.enum(FUND),
    name: z.string().min(3, "Name must be at least 3 characters").max(30, "Name must be 30 characters max"),
    designation: z.string().min(3, "Designation must be at least 3 characters"),
    email: z.string().email('Invalid email address').min(3, 'Email must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    altemail: z.string().email('Invalid email address'),
    skype: z.string().refine((val) => {
        const skypeRegex = /^[a-zA-Z0-9_-]+$/;
        return skypeRegex.test(val);
    }, {
        message: 'Invalid Skype ID',
    }),
    phone: z.string().refine((val) => String(val).length === 10, 'Phone number must be 10 digits long'),
    mobile: z.string().refine((val) => String(val).length === 10, 'Phone number must be 10 digits long'),
    website: z.string().refine((val) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(val);
    }, {
        message: 'Invalid website URL',
    }),
    linkedin: z.string().refine((val) => {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlRegex.test(val);
    }, {
        message: 'Invalid Linkedin URL',
    }),
    captcha: z.string()
}