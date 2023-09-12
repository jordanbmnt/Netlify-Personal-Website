import { Container } from "@mui/system"
import './mainPage.css'
import { Button } from "@mui/material"

export const MainPage = () => {
  return (
    <Container sx={{display: 'flex'}} className='main-page'>
      <h1>Hello</h1>
      <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, magnam quidem nostrum praesentium quisquam suscipit, qui optio hic distinctio, voluptatibus aliquid. Nam, culpa. Aliquam libero sed quod maxime laboriosam officia debitis, laudantium eos ullam alias fugit ipsum deserunt incidunt dicta nihil expedita tenetur! Voluptates delectus aspernatur autem eos perferendis quis.</h4>
      <Button variant="outlined">Generate</Button>
    </Container>
  )
}