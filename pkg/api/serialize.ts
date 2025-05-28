export type ReturnData<T> = {
	success: boolean;
	code: number;
	data?: T;
	errorMsg?: string;
};

export type FileListData = {
	files: string[];
	folders: string[];
};

export function successResult<T>(data: T): ReturnData<T> {
	return {
		success: true,
		code: 200,
		data,
	};
}

export function failedResult(code: number, err: string): ReturnData<void> {
	return {
		success: false,
		code,
		errorMsg: err,
	};
}
