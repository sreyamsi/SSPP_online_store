export const products = {
    'f1': {
        img: './sub_images/cashew/img_01.jpg',
        smallImgs: ['./sub_images/cashew/img_01.jpg', './sub_images/cashew/img_02.jpg', './sub_images/cashew/img_03.jpg', './sub_images/cashew/img_04.jpg'],
        category: 'Dry Fruits',
        name: 'Cashew Nuts',
        prices: {
            '250g': 200,
            '500g': 400,
            '750g': 600,
            '1 Kg': 800
        },
        sizes: ['250g', '500g', '750g', '1 Kg'],
        description: 'Our cashews are hand-selected for their rich, buttery flavor and perfect crunch. Ideal for snacking or adding a nutritious touch to your favorite dishes. Freshly packaged to ensure top quality and flavor in every bite.',
        related: [
            { id: 'f2', img: './img/products/f2.jpg', name: 'Badam', price: '₹720' },
            { id: 'f3', img: './img/products/f4.jpg', name: 'Kismiss (Gold)', price: '₹269' },
            { id: 'f4', img: './img/products/f3.jpg', name: 'Iranian Pistachio', price: '₹270' },
            { id: 'f5', img: './img/products/f5.jpg', name: 'Anjeer', price: '₹1210' },
        ]
    },
    'f2': {
        img: './img/products/f2.jpg',
        smallImgs: ['./sub_images/cashew/img_01.jpg', './sub_images/cashew/img_02.jpg', './sub_images/cashew/img_03.jpg', './sub_images/cashew/img_04.jpg'],
        category: 'Dry Fruits',
        name: 'Badam',
        prices: {
            '250g': 180,
            '500g': 360,
            '750g': 540,
            '1 Kg': 720
        },
        sizes: ['250g', '500g', '750g', '1 Kg'],
        description: 'Discover the rich, nutty flavor of our premium Badam (almonds), available in our shop. These almonds are carefully selected for their high quality and freshness. Whether you enjoy them as a snack, incorporate them into your recipes, or use them in your baking, our Badam offer a delightful crunch and a host of health benefits. ',
        related: [
            { id: 'f1', img: './img/products/f1.jpg', name: 'Cashew Nuts', price: '₹800' },
            { id: 'f3', img: './img/products/f3.jpg', name: 'Kismiss (Gold)', price: '₹269' },
            { id: 'f4', img: './img/products/f4.jpg', name: 'Iranian Pistachio', price: '₹270' },
            { id: 'f5', img: './img/products/f5.jpg', name: 'Anjeer', price: '₹1210' },
        ]
    },

    'p1': {
        img: './sub_images/Pooja_items/Turmeric/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/Turmeric/two.jpg', './sub_images/Pooja_items/Turmeric/three.jpg', './sub_images/Pooja_items/Turmeric/four.jpg', './sub_images/Pooja_items/Turmeric/five.jpg'],
        category: 'Pooja Items',
        name: 'Turmeric Powder (పసుపు)',
        prices: {
            '250g': 60,
            '500g': 120,
            '1 Kg': 240,
            '25g tins':250,
            '50g tins':400

        },
        sizes: ['250g', '500g', '1 Kg', '25g tins', '50g tins'],
        description: 'Discover the purity of tradition with our finest turmeric powder, meticulously handpicked from the best farms and ground to perfection to preserve its natural flavor and vibrant color. Rich in antioxidants and known for its healing properties, our turmeric powder is an essential ingredient for enhancing the taste and health benefits of your dishes.',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p2': {
        img: './sub_images/Pooja_items/Kunkum/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/Kunkum/two.jpg', './sub_images/Pooja_items/Kunkum/three.jpg', './sub_images/Pooja_items/Kunkum/four.jpg', './sub_images/Pooja_items/Kunkum/five.jpg'],
        category: 'Pooja Items',
        name: 'Kunkuma (కుంకుమ)',
        prices: {
            '500g': 110,
            '1 Kg': 220,
            '50 g full pack': 230,
            '100 g full pack': 230,
            '10g tins':250

        },
        sizes: ['500g', '1 Kg', '50 g full pack', '100 g full pack', '10g tins'],
        description: 'Experience the sacred essence of tradition with our pure Kunkuma (కుంకుమ), carefully sourced and prepared for your daily rituals. Known for its auspicious significance, Kunkuma is an integral part of pooja ceremonies, symbolizing devotion and prosperity. ',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p3': {
        img: './sub_images/Pooja_items/Agarbathi/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/Agarbathi/two.jpg', './sub_images/Pooja_items/Agarbathi/three.jpg', './sub_images/Pooja_items/Agarbathi/four.jpg', './sub_images/Pooja_items/Agarbathi/five.jpg'],
        category: 'Pooja Items',
        name: 'Incense sticks (అగర్బత్తి)',
        prices: {
            '200g': 99,
            '100g': 49,
            '10/- dozen': 100,
            '20/- dozen':200,
            'special pack':499

        },
        sizes: ['200g', '100g', '10/- dozen', '20/- dozen', 'special pack'],
        description: 'Immerse yourself in divine fragrance with our premium pooja agarbathi, crafted to enhance your spiritual rituals. Each stick is infused with natural, soothing aromas that create a serene and peaceful atmosphere during your poojas and meditations.  Bring the essence of devotion into your home with our pooja agarbathis, now available at our shop!',
        related: [
            { id: 'p2', category: 'Pooja Items', img: './sub_images/Pooja_items/Kunkum/one.jpg', name: 'Kunkuma (కుంకుమ)', price: '₹220' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p4': {
        img: './sub_images/Pooja_items/camphor/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/camphor/two.jpg', './sub_images/Pooja_items/camphor/three.jpg', './sub_images/Pooja_items/camphor/four.jpg', './sub_images/Pooja_items/camphor/five.jpg'],
        category: 'Pooja Items',
        name: 'Camphor (కర్పూరం)',
        prices: {
            '1/- pack': 15,
            '25g pack': 40,
            '50g pack': 240,
            '250g slab':250,
            '500g slab':400

        },
        sizes: ['1/- pack', '25g pack', '50g pack', '250g slab', '500g slab'],
        description: 'Purify your surroundings and uplift your rituals with our high-quality camphor. Known for its sacred significance, our camphor burns cleanly, releasing a divine fragrance that enhances spiritual practices and cleanses the atmosphere.  Bring home the purity of tradition with our premium camphor, now available at our shop!',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p5': {
        img: './sub_images/Pooja_items/doop sticks/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/doop sticks/two.jpg', './sub_images/Pooja_items/doop sticks/three.jpg', './sub_images/Pooja_items/doop sticks/four.jpg', './sub_images/Pooja_items/doop sticks/five.jpg'],
        category: 'Pooja Items',
        name: 'Dhoop sticks (ధూపం)',
        prices: {
            'cycle doop': 15,
            'eesa doop': 13,
            'chandan doop': 14,
            'supreme doop':12,
            'ashika doop':13
        },
        sizes: ['cycle doop', 'eesa doop', 'chandan doop', 'supreme doop', 'ashika doop'],
        description: 'Infuse your space with the divine aroma of our premium doop sticks, crafted to elevate your spiritual practices. Made from natural ingredients, these doop sticks release a rich, lingering fragrance that purifies the air and sets the perfect ambiance for meditation, pooja, and relaxation. Ideal for everyday rituals or special occasions, they symbolize a deeper connection to the sacred.',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p6': {
        img: './sub_images/Pooja_items/gandham/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/gandham/two.jpg', './sub_images/Pooja_items/gandham/three.jpg', './sub_images/Pooja_items/gandham/four.jpg', './sub_images/Pooja_items/gandham/five.jpg'],
        category: 'Pooja Items',
        name: 'Sandalwood powder (గంధం పొడి)',
        prices: {
            '500g': 69,
            '500g tablets': 99,
            '500g sticks':139,
            '50g tins': 150,
            'supreme pack':449

        },
        sizes: ['500g', '500g tablets', '500g sticks', '50g tins', 'supreme pack'],
        description: 'Embrace the essence of purity with our finest sandalwood powder (గంధం పొడి), a staple in traditional poojas and skincare rituals. Sourced from natural sandalwood, this powder offers a soothing fragrance that enhances spiritual ceremonies and creates a calming atmosphere.Elevate your rituals with the divine touch of our sandalwood powder, now available at our shop!',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p7': {
        img: './sub_images/Pooja_items/oil/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/oil/two.jpg', './sub_images/Pooja_items/oil/three.jpg', './sub_images/Pooja_items/oil/four.jpg', './sub_images/Pooja_items/oil/five.jpg'],
        category: 'Pooja Items',
        name: 'Pooja oil (పూజ నూనె)',
        prices: {
            '1 lit (with free)': 210,
            '1 lit': 195,
            '500ml (with free)': 105,
            '500ml':95,
            '1 lit (Ambica)':200

        },
        sizes: ['1 lit (with free)', '1 lit', '500ml (with pack)', '500ml', '1 lit (Ambica)'],
        description: 'Light up your spiritual journey with our pure pooja oil, specially blended for sacred rituals. Crafted from premium ingredients, this oil ensures a steady, bright flame that enhances the atmosphere of devotion and positivity in your home. Bring warmth and blessings into your rituals with our high-quality pooja oil, now available at our shop!',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p8': {
        img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/Pacha Karpoor/two.jpg', './sub_images/Pooja_items/Pacha Karpoor/three.jpg', './sub_images/Pooja_items/Pacha Karpoor/four.jpg', './sub_images/Pooja_items/Pacha Karpoor/five.jpg'],
        category: 'Pooja Items',
        name: 'Bhimsen Camphor (పచ్చ కర్పూరం)',
        prices: {
            'supreme pack': 999,
            '500g': 499,
            '100g': 99,
            '50g':49,
            '10/- box':99

        },
        sizes: ['supreme pack', '500g', '100g', '50g', '10/- box'],
        description: 'Enhance your spiritual practices with our premium Bhimsen Camphor (పచ్చ కర్పూరం), renowned for its purifying properties and divine fragrance. Carefully selected for its quality and effectiveness, this camphor releases a strong, soothing aroma that clears the air and creates a sacred atmosphere during pooja and aarti. Experience its transformative essence, now available at our shop!',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p5', category: 'Pooja Items', img: './sub_images/Pooja_items/doop sticks/one.jpg"', name: 'Dhoop sticks (ధూపం)', price: '₹15' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p9': {
        img: './sub_images/Pooja_items/Poorna huthi/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/Poorna huthi/two.jpg', './sub_images/Pooja_items/Poorna huthi/three.jpg', './sub_images/Pooja_items/Poorna huthi/four.jpg', './sub_images/Pooja_items/Poorna huthi/five.jpg'],
        category: 'Pooja Items',
        name: 'Samithu (సమితు) + <br> poornahuthi (పూర్ణాహుతి)',
        prices: {
            'Samithu (సమితు)': 90,
            'poornahuthi (పూర్ణాహుతి)': 60,
            'combo': 149,

        },
        sizes: ['Samithu (సమితు)', 'poornahuthi (పూర్ణాహుతి)', 'combo'],
        description: 'Elevate your sacred rituals with our Samithu (సమితు) and Poornahuthi (పూర్ణాహుతి). Samithu, gathered with reverence, is perfect for offering during pooja ceremonies, while Poornahuthi adds a profound touch to the completion of rituals. Together, they bring a sense of fulfillment and divine connection to your spiritual practices. Experience the harmony and sanctity these essentials bring to your rituals, now available at our shop!',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p10': {
        img: './sub_images/Pooja_items/Rose water/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/Rose water/two.jpg', './sub_images/Pooja_items/Rose water/three.jpg', './sub_images/Pooja_items/Rose water/four.jpg', './sub_images/Pooja_items/Rose water/five.jpg'],
        category: 'Pooja Items',
        name: 'Rose Water (రోజ్ వాటర్)',
        prices: {
            '1 lit': 110,
            '500ml': 50,
            '250ml': 25,
            '500ml (jsr)':35,
            '10/- dozen':110

        },
        sizes: ['1 lit', '500ml', '250ml', '500ml (jsr)', '10/- dozen'],
        description: 'Immerse yourself in the soothing essence of our pure Rose Water (రోజ్ వాటర్), a timeless ingredient for both spiritual and personal care. Its delicate floral aroma enhances pooja rituals, offering a calming and refreshing atmosphere. Embrace its gentle, uplifting fragrance and elevate your sacred moments with our premium Rose Water, now available at our shop!',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p5', category: 'Pooja Items', img: './sub_images/Pooja_items/doop sticks/one.jpg"', name: 'Dhoop sticks (ధూపం)', price: '₹15' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p11': {
        img: './sub_images/Pooja_items/vibudhi/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/vibudhi/two.jpg', './sub_images/Pooja_items/vibudhi/three.jpg', './sub_images/Pooja_items/vibudhi/four.jpg', './sub_images/Pooja_items/vibudhi/five.jpg'],
        category: 'Pooja Items',
        name: 'Vibuthi powder (విభూతి)',
        prices: {
            '500g': 149,
            '50g (10 units)': 169,
            '100g ': 29,
            '500g tablets':189,
            'tube':49

        },
        sizes: ['500g', '50g (10 units)', '100g', '500g tablets', 'tube'],
        description: 'Experience the sacred purity of our Vibuthi Powder (విభూతి), a cherished element in traditional pooja rituals. Known for its divine significance, Vibuthi symbolizes spiritual purification and blessings. Our finely crafted powder, sourced with care, enhances your worship practices and brings a sense of holiness to your rituals. Embrace the essence of devotion and grace with our Vibuthi Powder, now available at our shop!',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
            { id: 'p12', category: 'Pooja Items', img: './sub_images/Pooja_items/Vothulu/one.jpg"', name: 'Vattulu (వత్తులు)', price: '₹250' },
        ]
    },

    'p12': {
        img: './sub_images/Pooja_items/Vothulu/one.jpg',
        smallImgs: ['./sub_images/Pooja_items/Vothulu/two.jpg', './sub_images/Pooja_items/Vothulu/three.jpg', './sub_images/Pooja_items/Vothulu/four.jpg', './sub_images/Pooja_items/Vothulu/five.jpg'],
        category: 'Pooja Items',
        name: 'Vattulu (వత్తులు)',
        prices: {
            '1 pcs': 15,
            '365 vattulu': 40,
            'small gundu vattlu':250,
            '1 lakh vattulu':400

        },
        sizes: ['1 pcs', '365 vattulu', 'small gundu vattlu', '1 lakh vattulu'],
        description: 'Elevate your spiritual rituals with our premium Vattulu (వత్తులు), essential for traditional pooja ceremonies. These sacred offerings, meticulously prepared, play a vital role in enhancing the sanctity of your worship practices. Symbolizing devotion and reverence, our Vattulu bring a profound sense of connection and purity to your rituals. ',
        related: [
            { id: 'p3', category: 'Pooja Items', img: './sub_images/Pooja_items/Agarbathi/one.jpg', name: 'Incense sticks (అగర్బత్తి)', price: '₹99' },
            { id: 'p5', category: 'Pooja Items', img: './sub_images/Pooja_items/doop sticks/one.jpg"', name: 'Dhoop sticks (ధూపం)', price: '₹15' },
            { id: 'p8', category: 'Pooja Items', img: './sub_images/Pooja_items/Pacha Karpoor/one.jpg"', name: 'Bhimsen Camphor (పచ్చ కర్పూరం)', price: '₹999' },
            { id: 'p10', category: 'Pooja Items', img: './sub_images/Pooja_items/Rose water/one.jpg"', name: 'Rose Water (రోజ్ వాటర్)', price: '₹50' },
        ]
    },
    // More products can be added here...
};
