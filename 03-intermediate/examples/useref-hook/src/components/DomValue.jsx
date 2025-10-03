import { useRef, useState } from 'react'

function DomValue() {
    const emailRef = useRef(null);

    const [errors, setErrors] = useState({});

    function validateForm() {
        const newErrors = {};

        const email = emailRef.current.value.trim();
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!email.includes('@')) {
            newErrors.email = 'Invalid email format';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted: ', emailRef.current.value);
        } else {
            console.log('Form data invalid');
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: '480px'}}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Enter your email"
                />
                {errors.email && (
                    <span className='text-danger text-small'>
                        {errors.email}
                    </span>
                )}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default DomValue