import * as Yup from "yup";
// تكوين الحقول
export const customerFields = [
    {
      name: "status",
      label: "Status",
      type: "select",
      required: true,
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
        { value: "lead", label: "Lead" },
      ],
      col: 6,
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      required: false,
      options: [
        { value: "admin", label: "Admin" },
        { value: "customer", label: "Customer" },
      ],
      col: 6,
    },
    {
      name: "phone",
      type: "phone", 
      label: "Phone",
      col: 6
    },
    {
      name: "company",
      type: "text",
      label: "Company", 
      col: 6
    }
  ];

  // مخطط التحقق
 export const validationSchema = {
    status: Yup.string().required("Status is required"),
      role: Yup.string().required("Role is required"),
      phone: Yup.string().trim(),
      company: Yup.string().trim()
    
  };
