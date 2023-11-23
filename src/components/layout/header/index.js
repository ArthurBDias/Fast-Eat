import React, {useState, useEffect, useContext} from 'react'

import { HeaderBox, IconBox, MenuBox, MenuIcon, MenuMobile, SocialIcons, CartContainer, CartBox, CartList, CartItem } from "./style"
import { Link } from "react-router-dom"

import LinkButton from '../../layout/linkButton'
import Logo from '../../../assets/images/entregawhite.png'

import { FaFacebook, FaInstagram, FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

import { CartContext } from "../../../contexts/CartContext";

export default function Index() {

    const [widthState, setWidthState] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)


     const {cart, AddCart, RemoveItemCart} = useContext(CartContext)   

    const [CartItens, setCartItens] = useState([])

    const setView = () => {
        setWidthState(window.innerWidth)       
    }

    const toogleMenu = () =>{
        setIsMenuOpen((open) => !open)
    }

    const toogleCart = () =>{
        setIsCartOpen((open) => !open)
    }

    useEffect(()=> setView())

    useEffect(()=> {
        setCartItens(cart)

        if(cart.length >=1) {
            setIsCartOpen(true)
        }

    }, [cart])

    return(
        <HeaderBox>

            <IconBox>
                <Link to={'/'}>
                <img src={Logo} alt="Icone Delivery"/>
                </Link>
            </IconBox>

            <MenuBox>

            { widthState >= 768 ? (
                <>
                <Link to={'/'}>
                    <span>Início</span>
                </Link>

                <Link to={'/menu'}>
                    <span>Cardápio</span>
                </Link>

                <Link to={'/contact'}>
                    <span>Contato</span>
                </Link>

                <CartContainer>
                    <button>
                        <FaShoppingCart onClick={toogleCart}/>
                    </button>
                    <CartBox className={isCartOpen ? 'active' : null}>
                        {CartItens.length >= 1 ? (
                            <CartList>

                                <button className='close' onClick={toogleCart}>X</button>

                                {CartItens.map((item, index) => (
                                    <CartItem key={index}>
                                        <img src={item.image} alt={item.title}/>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.ingredientes ? item.ingredientes : ''}</p>
                                            <p>R${item.price}</p>
                                            <p>
                                                <button>+</button>
                                                <span> {item.quantity} </span>
                                                <button>-</button>
                                            </p>
                                            <button onClick={() => RemoveItemCart(item.id)} className='remove'>Remove</button>
                                        </div>
                                    </CartItem>
                                ))}

                                <button onClick={null} className='checkout'>Finalizar Compra</button>

                            </CartList>
                    ) : (
                        <div className='empty-cart'>
                            <button className='close' onClick={toogleCart}>X</button>
                            <p>Não há itens no carrinho.</p>
                        </div>
                    )}
                </CartBox> 
                </CartContainer>
                </>
            ) : (
                <div>
                    <MenuIcon>
                    <IoIosMenu onClick={toogleMenu} />            
                    </MenuIcon>

                    <CartContainer>
                    <button>
                        <FaShoppingCart onClick={toogleCart}/>
                    </button>
                    <CartBox className={isCartOpen ? 'active' : null}>
                        {CartItens.length >= 1 ? (
                            <CartList>

                                <button className='close' onClick={toogleCart}>X</button>

                                {CartItens.map((item, index) => (
                                    <CartItem key={index}>
                                        <img src={item.image} alt={item.title}/>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.ingredientes ? item.ingredientes : ''}</p>
                                            <p>R${item.price}</p>
                                            <p>
                                                <button>+</button>
                                                <span> 0 </span>
                                                <button>-</button>
                                            </p>
                                            <button onClick={() => RemoveItemCart(item.id)} className='remove'>Remove</button>
                                        </div>
                                    </CartItem>
                                ))}

                                <button onClick={null} className='checkout'>Finalizar Compra</button>

                            </CartList>
                    ) : (
                        <div className='empty-cart'>
                            <button className='close' onClick={toogleCart}>X</button>
                            <p>Não há itens no carrinho.</p>
                        </div>
                    )}
                </CartBox> 
                </CartContainer>

                    <MenuMobile className={isMenuOpen ? 'is-open' : ''}>

                        <button className='closeButton' onClick={toogleMenu}>X</button>            

                        <Link to={'/'} onClick={toogleMenu}>
                        <span>Início</span>
                        </Link>

                        <Link to={'/menu'} onClick={toogleMenu}>
                            <span>Cardápio</span>
                        </Link>

                        <Link to={'/contact'} onClick={toogleMenu}>
                            <span>Contato</span>
                        </Link>

                        <div className='button' onClick={toogleMenu}>
                            <LinkButton link='/menu' text='Fazer Pedido' />
                        </div>

                        <SocialIcons>
                            <p>Siga nossas redes sociais:</p>

                            <div>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram/></a>
                                <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noreferrer"><FaFacebook/></a>
                                <a href="https://wa.me//5517991266168" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
                            </div>
                    </SocialIcons>

                    </MenuMobile>
                </div>
            )}
                

            </MenuBox>

        </HeaderBox>
    )
}