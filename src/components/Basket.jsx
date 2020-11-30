import React,{useContext,useState}from "react";
import styled from "styled-components";
import Color from "../utils/Color";
import { UserContext } from "./UserContext";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link, useHistory} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';



const BasketContainer = styled.div`
padding: 25vh 15vw 20vh 10vw;
display: flex;
flex-direction: column;
`;
const BasketTitle = styled.h1`
color: ${Color.Green};
margin-bottom:10vh;
`;
const BasketContentContainer = styled.div`
display: flex;
flex-direction: column;
`;
const BasketItemsContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding-bottom:8vh;
`;
const BasketItemsImage = styled.div`
width: 150px;
height: 150px;
background-size: cover;
background-repeat: no-repeat;
background-size: 100%;
border-radius:8px;
`;
const BasketItemsDetails = styled.p`
color: ${Color.Green};
font-size:20px;
`;
const ButtonContainer = styled.div`
display:flex;
justify-content: flex-end;
margin-top:10vh;
`;
const BookButton = styled.button`
  color: ${Color.White};
  background-color: ${Color.Green};
  font-size: 25px;
  border-radius: 8px;
  border: none;
  padding: 10px 20px;
  transition-duration: 0.4s;
  cursor: pointer;
  outline:none;
  @media (max-width: 900px) {
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
const ConfirmButton = styled.button`
  color: ${Color.White};
  background-color: ${Color.Green};
  font-size:12px;
  border-radius: 8px;
  border: none;
  padding: 5px 10px;
  transition-duration: 0.4s;
  cursor: pointer;
  outline:none;
`;
const BasketRemoveButton = styled(ConfirmButton)`
`;
const BasketItemDetailsConatiner = styled.div`
display:flex;
flex-direction: column;
`
const AddAndDeleteItemsContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
`
const Input = styled.input`
width:30px;
margin-left: 5px;
margin-right:5px;
color:${Color.Green};
border:1px solid ${Color.Green};
border-radius: 4px;
text-align:center
`;

function Basket (){
    const userInfo = useContext(UserContext)
    const {cartItems, setCartItems} = userInfo
    const [bookModalOpen, setBookModalOpen] = useState(false)

    const history = useHistory();
    
    function handleBookButton() {
        setBookModalOpen(true)
    }
    function handleCancelBook() {
        setBookModalOpen(false)
    }

    function handleConfirmButton(){
        setCartItems([])
    }

    function handleRemove(id){
        const updatedCartItems = cartItems.filter((item)=> item.id !== id)
        setCartItems(updatedCartItems)
    }
    
    function InputItemNumbers(){

    }
    function AddItemsIcon(id){
        const addedItem = cartItems.find((e)=> e.id === id)
        setCartItems([...cartItems, addedItem])
    }
    function DeleteItemsIcon(id){
        const deletedItem =cartItems.indexOf(cartItems.find((e)=> e.id === id))
            cartItems.splice(deletedItem, 1)
            const newCartItems = Array.from(cartItems)
            setCartItems(newCartItems) 
    }

    return (
        <BasketContainer>
            <BasketTitle>Shopping Cart : {cartItems.length} items</BasketTitle>
            <BasketContentContainer>
                {cartItems.filter((v,i, a) => a.findIndex(t=>(t.id === v.id))=== i).map((item) => {
                    return (
                        <BasketItemsContainer key={item.id}>
                            <BasketItemsImage  style={{
                                backgroundImage: `url(${item.image})`,
                                }}/>
                                <BasketItemDetailsConatiner>
                                <BasketItemsDetails>{item.name}</BasketItemsDetails>
                                <AddAndDeleteItemsContainer>
                                    <AddIcon style={{color:`${Color.Green}`}} onClick={()=>AddItemsIcon(item.id)}/>
                                    <Input value={cartItems.filter((e)=> e.id === item.id).length} onChange={()=>InputItemNumbers(item.id)}/>
                                    <MinimizeIcon viewBox="0 7 24 24"style={{color:`${Color.Green}`}} onClick={()=>DeleteItemsIcon(item.id)}/>
                                </AddAndDeleteItemsContainer>
                                </BasketItemDetailsConatiner>

                            
                            <BasketRemoveButton onClick={()=>handleRemove(item.id)}>Remove</BasketRemoveButton>
                        </BasketItemsContainer>
                    )
        
                })}
            </BasketContentContainer>
            <ButtonContainer>
                <BookButton onClick={handleBookButton}> Booking Now</BookButton>
            </ButtonContainer>
            <Dialog  open={bookModalOpen}
                onClose={handleCancelBook}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{color:`${Color.DarkGreyText}`}}>{"Book the plants"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{color:`${Color.LightGreyText}`}}>
                        Book the plants now ~~~~~
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{marginRight:"25px"}}>
                    <ConfirmButton onClick={handleCancelBook} style={{marginRight:"8px"}}  >
                        Cancel
                    </ConfirmButton>
                    <Link  to="/confirm">
                    <ConfirmButton onClick={handleConfirmButton}>
                        Confirm
                    </ConfirmButton>
                    </Link>
                 </DialogActions>
            </Dialog>
        </BasketContainer>
    )
}

export default Basket