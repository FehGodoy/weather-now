import styled from "styled-components";

export const BoxSearchCity = styled.div`
	padding: 20px;
	position: relative;

	@media screen and (max-width: 1170px) {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	.headerSearch {
		form {
			@media screen and (max-width: 1170px) {
				background: #2f2f34;
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				padding: 2px 20px;
			}

			input {
				border: 0;
				background: transparent;
				padding: 10px 0px;
				width: 75%;
				font-family: "Poppins", sans-serif;
				color: #fff;
				&::placeholder {
					color: #fff;
				}
				&:focus {
					outline: none;
				}
				@media screen and (max-width: 1170px) {
					width: 100%;
					border-bottom: 0;
				}
			}
			.resetInput {
				position: absolute;
				right: 120px;
				top: 25px;

				@media screen and (max-width: 1170px) {
					top: 12px;
				}
			}
			button {
				&.searchButton {
					background: #2f2f34;
					border: 0;
					color: #fff;
					padding: 20px;
					position: absolute;
					top: 0;
					right: 0;
					font-size: 20px;
					cursor: pointer;

					@media screen and (max-width: 1170px) {
						padding: 9px 20px;
					}
				}

				&.clearButton {
					background-color: transparent;
					border: 0;
					color: #fff;
					font-size: 15px;
					cursor: pointer;
					display: none;
				}
			}
		}
	}

	.bodySearch {
		height: 270px;
	}
`;
