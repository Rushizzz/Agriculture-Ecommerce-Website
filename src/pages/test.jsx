const [phone, setphone] = useState("")

  const onChangeHandler = event => {
    setphone(event.target.value);
 };

  const onSubmit = () => {
    console.log(phone)
  }