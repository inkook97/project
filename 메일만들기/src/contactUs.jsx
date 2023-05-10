import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// npm install @emailjs/browser --save

function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm('service_punjuy8', 'template_hda885d', form.current, 'AGeWvwVg4GfME7SIz')
            .then((result) => {
                console.log(result.text);
                // 성공시 메시지 창 확인
                alert('메일 보내기 성공');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();// input 태그에 입력된 내용 삭제 -> 초기화
    };
    return (
        <div style={{ padding: '50px' }}>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label><br />
                <input type="text" name="to_name" /><br /><br />
                <label>from_name</label><br />
                <input type="text" name="from_name" /><br /><br />
                <label>user_email</label><br />
                <input type="email" name="user_email" /><br /><br />
                <label>Message</label><br />
                <textarea name="message" /><br /><br /><br />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactUs;