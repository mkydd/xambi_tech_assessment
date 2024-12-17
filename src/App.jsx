import "./App.css";
import { EditForm } from "./components/EditForm";

function App() {
  const EditEntryType = {
    Text: "Text",
    TextList: "TextList",
    DoubleTextList: "DoubleTextList",
    TextArea: "TextArea",
    File: "File",
    Address: "Address",
    Photo: "Photo",
    ProfilePhoto: "ProfilePhoto",
    FilePhoto: "FilePhoto",
    Radio: "Radio",
    Checkbox: "Checkbox",
    Article: "Article",
    Date: "Date",
    Select: "Select",
    Showcase: "Showcase",
    PillList: "PillList",
  };

  const ValidationType = {
    Email: "Email",
    PhoneNumber: "PhoneNumber",
    UserName: "UserName",
    CheckboxChecked: "CheckboxChecked",
    RequiredField: "RequiredField",
    TextLengthBelow30: "TextLengthBelow30",
    TextLengthBelow50: "TextLengthBelow50",
    TextLengthBelow100: "TextLengthBelow100",
    TextLengthBelow200: "TextLengthBelow200",
    TextLengthBelow300: "TextLengthBelow300",
    TextLengthBelow400: "TextLengthBelow400",
    Number: "Number",
    Price: "Price",
  };
  return (
    <>
      <EditForm
        title="Edit Profile"
        description="Update your profile details below."
        editEntries={[
          {
            attribute: "name",
            attributeName: "Full Name",
            type: EditEntryType.Text,
            isRequired: true,
            validations: [
              ValidationType.RequiredField,
              ValidationType.TextLengthBelow50,
            ],
          },
          {
            attribute: "email",
            attributeName: "Email",
            type: EditEntryType.Text,
            isRequired: true,
            validations: [ValidationType.Email],
          },
          {
            attribute: "pillList",
            attributeName: "PillList",
            type: EditEntryType.PillList,
            isRequired: true,
            validations: [],
          },
        ]}
        entityObj={{
          name: "John Doe",
          email: "john@example.com",
          pillList: [
            "Pill Label1",
            "Pill Label2",
            "Pill Label3",
            "Pill Label4",
            "Pill Label5",
          ],
        }}
        onSubmitSuccess={(updatedEntity) =>
          console.log("Submitted:", updatedEntity)
        }
        buttonText="Update Profile"
      />
    </>
  );
}

export default App;
