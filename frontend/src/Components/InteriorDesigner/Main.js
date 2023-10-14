import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import StackGrid, { transitions } from "react-stack-grid";


const { scaleDown } = transitions;
     
const Main = (props) => {
    const itemData = props.data.images;

    return (
    <Container>
        <div>
            <Article>
                <SharedActor>
                    <a>
                        <img src="/user.svg" alt=""></img>
                        <div>
                            <span>Title</span>
                            <span>Info</span>
                            <span>Date</span>
                        </div>
                    </a>
                    <button>
                        <img src="/ellipsis-icon.svg" alt=""/>
                    </button>
                </SharedActor>
                <StackGrid columnWidth={220} appear={scaleDown.appear}
                                      appeared={scaleDown.appeared}
                                      enter={scaleDown.enter}
                                      entered={scaleDown.entered}
                                      leaved={scaleDown.leaved}
                                      monitorImagesLoaded = {true}
                                      gutterWidth = {15}
                                      gutterHeight = {15}
                    >
                    {itemData.map( (image, index) => (
                        <img src={image} alt="Project images" key= {index}/>
                    ))}
                </StackGrid>
            </Article>
        </div>
    </Container>
    );
};

const Container = styled.div`
    grid-area: main;
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled(CommonCard)`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0px;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration:non;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1; 
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &::nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }

        }
    }

    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
    }
`;
export default Main;