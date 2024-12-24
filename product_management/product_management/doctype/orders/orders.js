// Copyright (c) 2024, Faris Ansari and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Orders", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Orders', {
	refresh(frm) {
		// your code here
	}
})
frappe.ui.form.on('Orders Item', {
    // Trigger when Quantity is changed in a row
    quantity: function (frm, cdt, cdn) {
        update_amount(frm, cdt, cdn);
    },
    // Trigger when Price is changed in a row
    price: function (frm, cdt, cdn) {
        update_amount(frm, cdt, cdn);
    }
});

function update_amount(frm, cdt, cdn) {
    let row = frappe.get_doc(cdt, cdn);
    if (row.quantity && row.price) {
        row.amount = row.quantity * row.price;
        frm.refresh_field('items');
    }
}
