import { useState, useContext } from 'react';
import UserContext from '../utils/userContext';

const Section = ({ title, description, isVisible, setIsVisible }) => {

    return (
        <div className="insta-section">
            <h3>{title}</h3>
            {
                isVisible
                    ?
                    <>
                        <button onClick={() => setIsVisible(false)} style={{ color: 'orange', textDecoration: 'underline' }}>Hide</button>
                        <p>{description} </p>
                    </>
                    :
                    <button onClick={() => setIsVisible(true)} style={{ color: 'orange', textDecoration: 'underline' }}>show</button>
            }
        </div>)
}


const Instamart = () => {

    const [visibleSection, setVisibleSection] = useState("");
    const { user, setUser } = useContext(UserContext);

    const handleOnChangeName = (e) => {
        setUser({
            ...user,
            name: e.target.value,
        });
    }

    const handleOnChangeEmail = (e) => {
        setUser({
            ...user,
            email: e.target.value,
        });
    }

    return (
        <div className="container">
            <h1>From Instamart Page</h1>
            <input type="text" value={user.name} onChange={handleOnChangeName} />
            <input type="text" value={user.email} onChange={handleOnChangeEmail} />
            <Section
                title={'About Instamart'}
                description={'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}
                isVisible={visibleSection == 'About'}
                setIsVisible={(isShown) => {
                    setVisibleSection(isShown ? 'About' : '');
                }}
            />
            <Section
                title={'Team Instamart'}
                description={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}
                isVisible={visibleSection == 'Team'}
                setIsVisible={(isShown) => {
                    setVisibleSection(isShown ? 'Team' : '');
                }}
            />
            <Section
                title={'Careers Instamart'}
                description={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}
                isVisible={visibleSection == 'Careers'}
                setIsVisible={(isShown) => {
                    setVisibleSection(isShown ? 'Careers' : '');
                }}

            />
        </div>
    )
}

export default Instamart;