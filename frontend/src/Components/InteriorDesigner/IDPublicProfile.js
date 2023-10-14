import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import LeftSide from './LeftSide';
import Main from './Main';

const config = require('../../config.json');

const IDPublicProfile = (props) => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState(props.match.params.id);
    const [profileDesc, setProfileDesc] = useState("");
    const [oneLiner, setOneLiner] = useState("");
    const [tags, setTags] = useState(['Interior Designing']);
    const [projectImages, setProjectImages] = useState([]);

    useEffect(() => {
        fetch(`${config.api.invokeUrl}/designerprofile/${username}`)
         .then(resp => resp.json())
         .then(data => {
                if (data.Item) {
                    setName(data.Item.name)
                    setUsername(data.Item.username)
                    setProfileDesc(data.Item.profileDesc)
                    setOneLiner(data.Item.oneLiner)
                    setTags(data.Item.tags)
                    setProjectImages(data.Item.projectImageUrls)
                }
            }
          )
        }, []);

    const passToLeft = {
        name: name,
        oneLiner: oneLiner,
        tags: tags.join(", ")
    }
    const passToMain = {
        name: name,
        images: projectImages,
        profileDesc: profileDesc
    }

    return (
        <Container>
            <Layout>
                <LeftSide {...props} data={passToLeft}/>
                <Main {...props} data={passToMain}/>
            </Layout>
        </Container>
    );

    
}

const Container = styled.div`
    padding-top: 52px;
    max-width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #f3f2ef;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main";
    grid-template-columns: minmax(0, 7fr) minmax(0, 17fr) ;
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 25px 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 5px;
    }
`;

export default IDPublicProfile;