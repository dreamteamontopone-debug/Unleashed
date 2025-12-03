document.addEventListener('DOMContentLoaded', () => {
    
    // CHANGE THE TEXT WHEN COLOR OR ITEM CHANGES IN THE PRODUCT OVERVIEW
    const productData = {
        //FOR CLOTHES
        'White': {
            image: '/unleashed/Images/PRODUCT 1.png',
            colorText: 'Color: White',
            designText: 'Graphic/Design: Large "Unleashed" Logo printed in front (Color : Navy Blue)',
            itemText: 'Drop Basic Tee - White'
        },
        'Black': {
            image: '/unleashed/Images/PRODUCT 2.png',
            colorText: 'Color: Black',
            designText: 'Graphic/Design: Large "Unleashed" Logo printed in front (Color : Gold)',
            itemText: 'Drop Basic Tee - Black'
        },
        'Gray': {
            image: '/unleashed/Images/PRODUCT 3.jpeg',
            colorText: 'Color: Gray',
            designText: 'Graphic/Design: Large "Unleashed" Logo printed in front (Color : Orange&Yellow Combination)',
            itemText: 'Acid Wash Embroided - Gray'
        },
        'Orange': {
            image: '/unleashed/Images/PRODUCT 4.png',
            colorText: 'Color: Orange',
            designText: 'Graphic/Design: Small "Unleashed" text embroided in the colar and shoulder (Color : Yellow)',
            itemText: 'Turtle Neck Tee - Orange'
        },
        //DONT FORGET THE (,) IN THE LAST COLOR YOU PUT IN THE SHIRTS TO AVOID GETTING ERROR IN CAPS COLOR
        //ADD HERE MORE SHIRTS IN THE FUTURE (Same structure of the current code)
        
        // -----------------------------------------------
        
        //FOR CAPS (HEADWEARS)
        'WHITE':{
            image: '/unleashed/Images/WHITE CAP.png',
            colorText: 'Color: White',
            designText: 'Graphic/Design: Distorted/Jagged "Unleashed" (Color : Neon Green & Purple)',
            itemText: 'Unleashed Cap V1 White'
        },
        'BLACK':{
            image: '/unleashed/Images/BLACK CAP.png',
            colorText: 'Color: Black',
            designText: 'Graphic/Design: Distorted/Jagged "Unleashed" (Color : Neon Green & Purple)',
            itemText: 'Unleashed Cap V1 Black'
        },
        'RED':{
            image: '/unleashed/Images/RED CAP.png',
            colorText: 'Color: Red',
            designText: 'Graphic/Design: Distorted/Jagged "Unleashed" (Color : Neon Green & Purple)',
            itemText: 'Unleashed Cap V1 Red'
        },
        'GREEN':{
            image: '/unleashed/Images/KHAKI CAP.png',
            colorText: 'Color: Green',
            designText: 'Graphic/Design: Distorted/Jagged "Unleashed" (Color : Neon Green & Purple)',
            itemText: 'Unleashed Cap V1 Green'
        },

    };

    // FOR DISPLAYING THE DROPDOWN MENU
    function toggleDropdown(buttonId) {
        const dropdownContent = document.getElementById(buttonId + 'Dropdown');
        if (dropdownContent) {
            dropdownContent.classList.toggle('show');
        }
    }

    // FUNCTION FOR SELECTING THE SIZE AND COLOR (AFFECTING THE DESC AND PROD IMAGE)
    function selectOption(buttonId, selectedValue) {
        const spanId = buttonId === 'size' ? 'selectedSize' : 'selectedColors';
        const span = document.getElementById(spanId);
        
        if (span) {
            span.textContent = `: ${selectedValue}`;
        }

        if (buttonId === 'colors') {
            const data = productData[selectedValue];
            
            if (data) {
                // FOR UPDATING THE IMAGE
                const productImg = document.querySelector('.productimg');
                if (productImg) productImg.src = data.image;

                // FOR UPDATING THE TEXT
                const colorDesc = document.getElementById('item-color');
                const designDesc = document.getElementById('item-design');
                const itemname = document.getElementById('item-name');

                if (colorDesc) colorDesc.textContent = data.colorText;
                if (designDesc) designDesc.textContent = data.designText;
                if (itemname) itemname.textContent = data.itemText;
            }
        }

        // HIDE MENU AFTER CLICK
        document.getElementById(buttonId + 'Dropdown').classList.remove('show');
    }

    // Attach click listeners to the buttons
    const sizeButton = document.getElementById('size');
    const colorsButton = document.getElementById('colors');

    sizeButton.addEventListener('click', () => {
        toggleDropdown('size');
        document.getElementById('colorsDropdown').classList.remove('show');
    });

    colorsButton.addEventListener('click', () => {
        toggleDropdown('colors');
        document.getElementById('sizeDropdown').classList.remove('show');
    });

    // ADDING THE SELECTED SIZE AND COLOR IN TEXT
    document.querySelectorAll('#sizeDropdown a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedValue = link.getAttribute('data-value');
            selectOption('size', selectedValue);
        });
    });

    document.querySelectorAll('#colorsDropdown a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const selectedValue = link.getAttribute('data-value');
            selectOption('colors', selectedValue);
        });
    });

    // FUNCTION FOR CLOSING THE DROPDOWN MENU
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});