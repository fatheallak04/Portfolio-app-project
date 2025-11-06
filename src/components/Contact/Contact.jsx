function Contact() {
    return <>
            <div className="contact-section mt-5" id="contact-section">
                <h2 className="text-center">Contact Me</h2>
                <form action="" className="mt-5 w-50 m-auto">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 shadow-none" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="fs-5">Full name</label>
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 shadow-none" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="fs-5">Email address</label>
                    </div>
                    <hr />
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 shadow-none" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput" className="fs-5">Phone number</label>
                    </div>
                    <hr />
                    <div className="form-floating">
                        <textarea id="floatingTextarea2" className="form-control border-0 shadow-none border-bottom border-2" placeholder="Leave a comment here"></textarea>
                        <label htmlFor="floatingTextarea2" className="fs-5">Message</label>                    
                    </div>
                    <button type="submit" className="text-white px-4 py-3 mt-3 fs-5">Send</button>
                </form>
            </div>    
        </>
}
export default Contact;
