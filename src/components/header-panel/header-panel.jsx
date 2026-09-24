/* eslint-disable react-refresh/only-export-components */
import { SlArrowLeft, SlHome } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router';
import styled from 'styled-components';

const HeaderPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<button onClick={() => navigate(-1)}>
				<SlArrowLeft className="icon" />
				Назад
			</button>
			<Link to="/">
				<SlHome className="icon" />
				Домой
			</Link>
		</div>
	);
};

export const HeaderPanel = styled(HeaderPanelContainer)`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 8px;
	justify-content: space-between;
	margin: 20px 0px 20px 20px;
	box-sizing: border-box;

	padding: 8px 10px;

	background: #202229;
	border: 1px solid #30333d;
	border-radius: 8px;

	button,
	a {
		height: 36px;
		display: flex;
		align-items: center;
		gap: 7px;

		padding: 0 10px;

		color: #f1f1f1;
		background: #292b34;

		border: 1px solid #3a3d48;
		border-radius: 6px;

		font: inherit;
		text-decoration: none;

		cursor: pointer;

		transition:
			background 0.2s ease,
			border-color 0.2s ease,
			color 0.2s ease;
	}

	button:hover,
	a:hover {
		background: #343741;
		border-color: #555966;
	}

	button:active,
	a:active {
		background: #24262e;
	}

	.icon {
		font-size: 17px;
		flex-shrink: 0;
	}

	button .icon {
		color: #d4d6dc;
	}

	a .icon {
		color: #d4d6dc;
	}

	button:hover .icon,
	a:hover .icon {
		color: #f1f1f1;
	}
`;
