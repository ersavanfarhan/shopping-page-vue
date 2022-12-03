<template>
    <br><br><br>
    <div class="container">
        <h1><strong>Payment Method</strong></h1>
        <p>We provide our customer to choose their payment methode with ease.</p>
        <div class="pay">

            <div class="pay-item" v-for="item in items" :key="item.id">
                <div class="title d-flex">
                    <h3><strong>{{ item.title }}</strong></h3>
                    <span @click="item.show = !item.show">
                        <span type="button" class="material-symbols-outlined" v-if="item.show">
                            expand_more
                        </span>
                        <span type="button" class="material-symbols-outlined" v-else>
                            expand_less
                        </span>
                    </span>
                </div>
                <p class="m-0"> {{ item.description }} </p>

                <div class="content" v-if="!item.show">
                    <div class="content-item" v-for="(content, id) in item.content" :key="id">
                        <img class="content-image" :src="content" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentView',

    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'E-Wallet',
                    description: "Type of electronic card which is used for transactions made online through a computer or a smartphone. Its utility is same as a credit or debit card. An E-wallet needs to be linked with the individual’s bank account to make payments.",
                    show: true,
                    content: [
                        require('../assets/linkaja.png'),
                        require('../assets/ShopeePay.png'),
                        require('../assets/QRIS.png'),
                        require('../assets/dana_blue.png'),
                    ]
                },
                {
                    id: 2,
                    title: "Cash On Delivery",
                    description: "Type of transaction where the recipient pays for a good at the time of delivery rather than using credit. The terms and accepted forms of payment vary according to the payment provisions of the purchase agreement. Cash on delivery is also referred to as collect on delivery since delivery may allow for cash, check, or electronic payment.",
                    show: true,
                    content: []
                },
                {
                    id: 3,
                    title: "Bank Transfer",
                    description: "Bank transfer (or wire transfer) is a payment method that allows consumers to transfer money to a bank account around the world. The consumer is provided with a unique reference number and details of the bank account where they can make their payment.",
                    show: true,
                    content: [],
                },
                {
                    id: 4,
                    title: "Pay Later",
                    description: "PayLater allows your customers to buy now and pay later in installments. Customers with an active credit line with one of our partner lenders can shop on your store via flexible installment loans. On top of that, you can enjoy significantly lower payment processing fees than credit cards and bank transfers.",
                    show: true,
                    content: []
                }
            ]
        }
    },
    methods: {
    },
}

</script>

<style scoped>
@media screen and (max-width: 992px) {
    .container {
        width: 100%;
        padding: 2vw 5vw;
        text-align: justify;
    }
}

@media screen and (min-width: 992px) {
    .container {
        width: 100%;
        padding: 2vw 5vw;
        text-align: justify;
    }
}

.pay {
    display: grid;
    gap: 30px;
}

.pay-item {
    padding-bottom: 1rem;
    border-bottom: 4px solid black;
}

.title {
    justify-content: space-between;
}

.content {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
}

.content-item {
    width: 15%;
    align-self: center;
}

.content-image {
    width: 100%;
}
</style>