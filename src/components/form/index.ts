import FormRoot from "./FormRoot";
import InputLabel from "./InputLabel";
import FormInput from "./inputs/FormInput";
import InputFile from "./inputs/InputFile";
import RadioInput from "./inputs/RadioInput";
import TextArea from "./inputs/TextArea";
import Option from "./select/Option";
import OptionGroup from "./select/OptionGroup";
import Select from "./select/Select";

const Form = {
    Root: FormRoot,
    Input: FormInput,
    Label: InputLabel,
    TextArea: TextArea,
    RadioInput: RadioInput,
    Select: Select,
    Option: Option,
    OptionGroup: OptionGroup,
    FileInput: InputFile
};

export default Form;