import styled from 'styled-components';
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from 'react'

function Todo({title, description, id, deleteTodo}) {

    return (
      <>
      <TodoRender>
        <TodoContainer>
                <TitleandDesc>
                    <Title>
                        {title}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                </TitleandDesc>
                <DeleteBttn>
                    <MdDelete className='buttonED' onClick={() => {deleteTodo(id)}}/>
                </DeleteBttn>
            </TodoContainer>
      </TodoRender>
      </>
    )
}

const TodoRender = styled.div`
    margin: 0 auto;
    padding: 5px;
    display: flex;
    justify-content: center;
    background-color: black;
    color: white;
`
const TodoContainer = styled.div`
    width: 500px;
    padding: 20px;
    border: 1px solid white;
    border-radius: 20px;
    background-color: #282828;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`
const TitleandDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
`
const Description = styled.p`
    max-width: 80%;
`
const DeleteBttn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    font-size: 35px;

    .buttonED {
        cursor: pointer;
    }

`

export default Todo;