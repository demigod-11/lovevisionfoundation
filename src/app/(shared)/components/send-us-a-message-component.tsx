"use client"

import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from "react"


function useSendUsAMessageFormComponentController(){
    const formData = {
        "entry.1364646539": "",
        "entry.1251254545": "",
        "entry.48286665": "",
        "entry.1205527320": ""
    }

    const [form, setForm] = useState(formData)
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState("");


    async function onSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        setDisabled(true);
        const formData = new FormData()
        Object.entries(form).forEach(([key, val]) => {
            formData.append(key, val)
        })

        console.log(Object.entries(form))

        const response = await fetch("https://docs.google.com/forms/u/1/d/e/1FAIpQLSdg0hlfeXM7XUrClGt43qJk9HqkKa7M_EgKKbysa_Zn-rApQQ/formResponse", {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
        })


        // if(response.ok){
        // }
        // else{
        //     setMessage("An error occured while processing. Please try again")
        // }
        setMessage("Thank you for submitting, we received your form")
        setDisabled(false);
    }

    function updateForm(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setForm(c => ({...c, [e.target.name]: e.target.value}))
    }

    return {message, onSubmit, form, updateForm, disabled}
}
export function SendUsAMessageFormComponent(){
    const {message, onSubmit, form, updateForm, disabled} = useSendUsAMessageFormComponentController();
    return (
        <form onSubmit={onSubmit} className="flex flex-col space-y-8">
                <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-400">Full Name *</label>
                <input type="text" name="entry.1364646539" id="fullName" value={form["entry.1364646539"]} onChange={updateForm} required className="mt-1 w-full bg-transparent border-0 border-b border-gray-600 focus:outline-none transition"/>
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email Address *</label>
                <input type="email" name="entry.1251254545" id="email" value={form["entry.1251254545"]} onChange={updateForm}  required className="mt-1 w-full bg-transparent border-0 border-b border-gray-600 focus:outline-none transition"/>
                </div>

                <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-400">Organization</label>
                <input type="text" name="entry.48286665" value={form["entry.48286665"]} id="organization" onChange={updateForm}  className="mt-1 w-full bg-transparent border-0 border-b border-gray-600 focus:outline-none transition"/>
                </div>

                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Your Message *</label>
                <textarea name="entry.1205527320" value={form["entry.1205527320"]} id="message" onChange={updateForm}  rows={3} required className="mt-1 w-full bg-transparent border-0 border-b border-gray-600 focus:outline-none transition"></textarea>
                </div>

                {
                    message ?<label className="block text-sm font-medium text-gray-400">{message}</label>: <></>
                }

                <div className="flex justify-end">
                <button disabled={disabled} type="submit" className="sm:inline-block w-full md:w-auto bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors ">
                    Submit
                </button>
                </div>

                
            </form>
    )
}