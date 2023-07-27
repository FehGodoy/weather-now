import styled from "styled-components";

export const boxDetailsWeather = styled.div`
	padding: 0px 20px;

	.header {
		border-top: 1px solid #999595;
		padding: 10px 0px;

		@media screen and (max-width: 1170px) {
			border-top: 1px solid #fff;
		}

		h6 {
			font-weight: 400;
			color: #fff;
			font-size: 16px;
		}
	}

	.infoAllWeather {
		.box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 12px 0px;
			color: #fff;
			.title {
				h6 {
					font-weight: 100;
					font-size: 16px;
				}
			}
			.value {
				h6 {
					font-weight: 300;
					font-size: 16px;
				}
			}
		}
	}
`;
