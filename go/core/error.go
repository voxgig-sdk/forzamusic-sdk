package core

type ForzamusicError struct {
	IsForzamusicError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewForzamusicError(code string, msg string, ctx *Context) *ForzamusicError {
	return &ForzamusicError{
		IsForzamusicError: true,
		Sdk:              "Forzamusic",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ForzamusicError) Error() string {
	return e.Msg
}
