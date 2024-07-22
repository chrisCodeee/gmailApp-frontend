import { useCompose } from "../../hooks";
import * as ConfidentialModeExpireStyle from "./ConfidentialModeExpireStyle";
import { modeExpireList } from "./confidentialModeParams";

const ConfidentialModeExpire = () => {
	const { useComposeMessage } = useCompose();
	return (
		<>
			<ConfidentialModeExpireStyle.ConfidentialModeExpireWrapper onClick={useComposeMessage.setConfidentialModeExpireOff}>
				<ConfidentialModeExpireStyle.ConfidentialModeExpireList>
					{modeExpireList.map((item) => (
						<ConfidentialModeExpireStyle.ConfidentialModeExpireItems key={item.name} onClick={() => useComposeMessage.setConfidentialModeExpireTime(`Expires in ${item.name}`, item.time, item.time.slice(5, item.time.length))}>
							{`Expires in ${item.name}`}
						</ConfidentialModeExpireStyle.ConfidentialModeExpireItems>
					))}
				</ConfidentialModeExpireStyle.ConfidentialModeExpireList>
			</ConfidentialModeExpireStyle.ConfidentialModeExpireWrapper>
		</>
	);
};

export default ConfidentialModeExpire;
