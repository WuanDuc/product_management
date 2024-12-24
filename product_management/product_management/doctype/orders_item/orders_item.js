// // Copyright (c) 2024, Faris Ansari and contributors
// // For license information, please see license.txt

// frappe.ui.form.on("Orders Item", {
// 	// refresh(frm) {

// 	// },
//     quantity: function (frm, cdt, cdn) {
//         calculate_amount(frm, cdt, cdn);
//     },
//     price: function (frm, cdt, cdn) {
//         calculate_amount(frm, cdt, cdn);
//     }
// });

// function calculate_amount(frm, cdt, cdn) {
//     let row = frappe.get_doc(cdt, cdn); 
//     if (row.quantity && row.price) {
//         row.amount = row.quantity * row.price;
//         frm.refresh_field('items');
//     }
// }