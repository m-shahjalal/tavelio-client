import { Container } from 'react-bootstrap';
import { BiCalendarEdit, BiLocationPlus, BiUserCircle } from 'react-icons/bi';
import { useLocation } from 'react-router';
import './Post.css';

const Post = () => {
	const { state } = useLocation();
	if (!state)
		return <h1 className='my-5 py-5 text-center'>something went wrong</h1>;
	return (
		<div>
			<img src={state.image} alt='cover' className='w-100 custom-cover' />
			<Container>
				<div className='post-content mb-5'>
					<h3 className='mt-5 pt-4 mb-2'>{state.title}</h3>
					<ul className='post-meta list-inline'>
						<li className='list-inline-item'>
							<BiUserCircle />{' '}
							<span>{state?.name || 'Unknown'}</span>
						</li>
						<li className='list-inline-item'>
							<BiCalendarEdit /> <span>{state.time}</span>
						</li>
						<li className='list-inline-item'>
							<BiLocationPlus /> <span>{state.place}</span>
						</li>
					</ul>
					<p className='mt-4' style={{ fontSize: '20px' }}>
						{state.lead}
					</p>
					<p className='lead'>{state.text}</p>
				</div>
				<hr />
			</Container>
		</div>
	);
};

export default Post;
