import styled from "styled-components";

export const Container = styled.div`
	position: absolute;
	bottom: 45px;
	left: 45px;

	@media screen and (max-width: 1170px) {
		position: relative;
		bottom: 0;
		left: 0;
	}

	.mainInformation {
		display: flex;
		gap: 15px;
		align-items: center;

		@media screen and (max-width: 1170px) {
			flex-direction: column;
			text-align: center;
			gap: 4px;
		}

		.temperature {
			span {
				color: #fff;
				font-size: 75px;
				font-weight: 600;
			}
		}
		.boxCity {
			.city {
				span {
					font-size: 35px;
					color: #fff;
					text-transform: capitalize;
				}
			}
			.tempoHoras {
				span {
					color: #fff;
					font-weight: 300;
				}
			}
		}
		.iconHas {
			display: grid;
			margin-left: 40px;

			@media screen and (max-width: 1170px) {
				margin-left: 0px;
			}

			img {
				margin: 0 auto;
				color: #fff;
				font-size: 40px;
			}
			span {
				color: #fff;
				text-align: center;
			}
		}
	}
	.footerBox {
		@media screen and (max-width: 991px) {
			margin-top: 20px;
		}
		.headerFooter {
			display: flex;
			align-items: center;
			gap: 5px;
			color: #fff;

			@media screen and (max-width: 1170px) {
				justify-content: center;
			}

			svg {
				font-size: 18px;
			}
			span {
				font-weight: 200;
				font-size: 18px;
			}
		}
		.listHours {
			margin-top: 20px;
			max-width: 700px;
			overflow-x: scroll;
			padding: 15px 0px;

			@media screen and (max-width: 1170px) {
				padding: 15px 0px;
				margin: 20px 15px 20px 15px;
				max-width: max-content;
			}
			ul {
				display: flex;
				list-style: none;
				gap: 18px;

				li {
					text-align: center;
					.title {
						span {
							color: #fff;
						}
					}
					.temperature {
						display: grid;
						color: #fff;

						img {
							margin: 0 auto;
						}
						span {
							font-size: 20px;
						}
					}
				}
			}
			&::-webkit-scrollbar-track {
				-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
				border-radius: 10px;
				background-color: #f5f5f5;
			}

			&::-webkit-scrollbar {
				width: 6px;
				background-color: #2f2f34;
				border-radius: 50px;
				height: 8px;
			}

			&::-webkit-scrollbar-thumb {
				border-radius: 10px;
				-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
				background-color: #2f2f34;
			}
		}
	}
`;

export const HeaderBox = styled.div`
	padding: 25px 40px;
	position: absolute;
	top: 0;

	@media screen and (max-width: 1170px) {
		position: relative;
		text-align: center;
	}

	h6 {
		color: #fff;
		font-size: 16px;
		font-weight: 400;
	}
`;
