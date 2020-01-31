import React, { useState } from 'react'
import "./form.css";

function ContactForm() {
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [isSent, setIsSent] = useState(false)

    fetch(`https://hooks.zapier.com/hooks/catch/1239764/oo73gyz/`, {
        method: 'POST',
        body: JSON.stringify({ email, comment }),
    }).then(() => setIsSent(true))
        .catch(() => alert("There was an error, please try again"))

    return (
        <form>
            <div className='form'>

                <span> <label htmlFor="comment">Your question or comment:</label></span>
                <br />

                <textarea
                    name="comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email (optional)</label> <br />
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <button type="submit">Send it!</button>
                </div>
      
    </form>
            )
          }
          export default ContactForm
