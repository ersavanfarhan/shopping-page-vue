<template>
    <div class="contact-container">
        <br><br><br>
        <h1><strong>Contact Us</strong></h1>
        <p>We are happy to receive any question from our customer. Please, send your question in the
            the blank form below and we will answer as soon as possible.</p>

        <div class="contact-faq">
            <!-- Contact form -->
            <div class="contact-form">
                <div class="full-name">
                    <h6>Full Name</h6>
                    <input placeholder="Type your name" required>
                </div>
                <div class="e-mail">
                    <h6>E-mail Adress</h6>
                    <input type="e-mail" placeholder="Type your e-mail" required>
                </div>
                <div class="textarea">
                    <h6>Your Question</h6>
                    <textarea rows="5" placeholder="Type your question here"></textarea>
                </div>
                <div class="btn btn-primary" type="submit">Send</div>
            </div>

            <!-- FAQ section -->
            <div class="faq">
                <h3><strong>FAQ</strong></h3>
                <div class="faq-item" v-for="item in faqList" :key="item.id">
                    <div class="question">
                        <p class="m-0"><strong>{{ item.question }}</strong></p>
                        <span @click="item.isHidden = !item.isHidden">
                            <span type="button" class="material-symbols-outlined" v-if="item.isHidden">
                                expand_more
                            </span>
                            <span type="button" class="material-symbols-outlined" v-else>
                                expand_less
                            </span>
                        </span>
                    </div>

                    <div class="answer m-3">
                        <p v-if="!item.isHidden">{{ item.answer }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    data() {
        return {
            faqList: [{
                "id": 1,
                "question": "What shipping method do you offer?",
                "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "isHidden": true
            },
            {
                "id": 2,
                "question": "Can I edit or cancel my order?",
                "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "isHidden": true,

            },
            {
                "id": 3,
                "question": "Can I change my shipping address?",
                "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "isHidden": true,

            },
            {
                "id": 4,
                "question": "How do I make a return or exchange?",
                "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "isHidden": true,

            },
            {
                "id": 5,
                "question": "When do I get refund?",
                "answer": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                "isHidden": true,

            },
            ]
        }
    },
}
</script>

<style scoped>
@media screen and (max-width: 992px) {
    .contact-container {
        max-width: 100%;
        padding: 2vw 5vw;
        text-align: justify;
    }

    .contact-form {
        display: grid;
        gap: 20px;
        margin-bottom: 5vh;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
    }

    .faq {
        display: grid;
        gap: 20px;

    }

    .question {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        cursor: pointer;
        border-bottom: 3px solid rgb(27, 129, 245);
    }
}

@media screen and (min-width: 992px) {
    .contact-container {
        max-width: 100%;
        padding: 2vw 12vw;
        text-align: justify;
    }

    .contact-faq {
        display: flex;
        gap: 10vw;
    }

    .contact-form {
        width: 100%;
        max-height: 372px;
        display: grid;
        gap: 20px;
        margin-bottom: 5vh;
    }

    .contact-form input,
    .contact-form textarea {
        width: 100%;
    }

    .faq {
        width: 100%;
        max-height: 100%;
        display: grid;
        padding: 1vw;
        border: 0.2em solid black;
        border-radius: 1rem;
    }

    .question {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        border-bottom: 3px solid rgb(27, 129, 245);
    }
}
</style>