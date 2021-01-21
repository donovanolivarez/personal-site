<template>
<div>
    <h2 class="contact-form-title">Contact Me</h2>
    <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" required>
        <label>Email</label>
        <input type="email" name="user_email">
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send">
    </form>
</div>
</template>

<script>

import { init, sendForm } from 'emailjs-com'
init("user_5BIAT0tsuE49p3cDEP9C9")

export default {
    methods: {
        sendEmail: (e) => {
            // need to validate here
            sendForm('contact_service', 'contact_form', e.target)
            .then((result) => {
                console.log('success!', result.status, result.text)
            }, (error) => {
                console.log('failure...', error)
            })
        },
    },
    name: "Contact" 
}
</script>

<style scoped>
    .contact-form-title {
        font-family: 'Montserrat', sans-serif;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 75vh;
        justify-content: center;
        align-items: center;
        background-color: #557174;
    }

    textarea {
        height: 15vh;
        width: 50vw;
    }

    input {
        width: 50vw;
        margin-bottom: 5vh;
    }

    input[type=text], input[type=email], textarea {
        resize: none;
        padding: 12px 20px;
        margin: 3vh 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    label{
        font-family: 'Montserrat', sans-serif;
    }

</style>